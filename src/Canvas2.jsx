import { useState, useMemo, useEffect } from 'react';
import map from "./assets/Updated_Venue_Map_Aligned_50_x_50_cm.svg"
import { ModalComponent } from './Modal'
import get_row_column from './GerPoints';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios'
import { io } from "socket.io-client";
import GetStandWithData from './data/getStandWithData';
import filterNonEmptyArrays from './data/fiterStandWithData';
import extractStandData from './data/sortCells';
// import { useGlobalContext } from './Context/PreviewContext';
import { UseStateContext } from './Context/Context';


const dummmyCoords = [

  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50760394166280000000,
    "lng": 0.03095784466103210000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50759802789350000000,
    "lng": 0.03095784466103210000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50759211412430000000,
    "lng": 0.03095784466103210000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50758620035500000000,
    "lng": 0.03095784466103210000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50758028658580000000,
    "lng": 0.03096683801198020000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50753889020100000000,
    "lng": 0.03097583136292830000,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 51.50753297643180000000,
    "lng": 0.03097583136292830000,
    "link_id": "<String>"
  }]
const superDummmyCoords = [

  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 45,
    "lng": 10,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 43,
    "lng": 12,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 42,
    "lng": 20,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 41,
    "lng": 6,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 39,
    "lng": 13,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 34,
    "lng": 6,
    "link_id": "<String>"
  },
  {
    "user_email": "ww.c@ch.com",
    "company_id": "id_1",
    "user_id": "user_id_1",
    "lat": 45,
    "lng": 10,
    "link_id": "<String>"
  }]
function AppendItems(arr, newStr) {
  return arr.push(newStr)
}
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));



const Canvas2 = () => {

  const {stands, setStands, currentStandSelection} = UseStateContext();
  const [standWithData, setStandWithData] = useState([]);
  const [filteredSWData, setfilteredSWData] = useState();

  const canvasSize = 52; // in centimeters
  const boxSize = 1; // in centimeters
  const numBoxes = canvasSize / boxSize; // Number of boxes per side
  const [selectedRowColumn, setSelectedRowColumn] = useState(["row_45col_13"]);
  // const [cellsSelected, setSelectedCells] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  // const [startCell, setStartCell] = useState(null);
  // const [endCell, setEndCell] = useState(null);

  const [selections, setSelections] = useState([]);
  // const [currentSelection, setCurrentSelection] = useState(null)

  const [showModal, setShowModal] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [selectionColors, setSelectionColors] = useState([]);
  // const triggerColor = () => {
  //   if (selectedRowColumn.length < 8) {
  //     superDummmyCoords.forEach((item) => {
  //       // let data = getCellCoordinates(item.lat, item.lng)
  //       // sleep(10000).then(() => {

  //       console.log('this ran after 1 second');
  //       const row = item.lat
  //       const col = item.lng
  //       const coords = `row_${row}col_${col}`
  //       const updatedArray = AppendItems(selectedRowColumn, coords)
  //       // document.querySelector('#' + coords).style.background = 'green';



  //       console.log("coords", coords)

  //       setSelectedRowColumn([...selectedRowColumn, coords]);
  //       // setSelectedRowColumn({...getCellCoordinates(item.lat, item.lng)})
  //       console.log(selectedRowColumn)
  //       console.log('bobbyhadz.com');
  //       // });

  //     })
  //   }

  // }
//    const triggerColor = async () => {
//     if (selectedRowColumn.length < 8) {
//       for (let i = 1; i < superDummmyCoords.length; i++) {
//         await sleep(10000)
//         const item = superDummmyCoords[i]
//         const row = item.lat
//         const col = item.lng
//         const coords = `row_${row}col_${col}`
//         setSelectedRowColumn([...selectedRowColumn, coords]);
//         for (let i = 0; i < selectedRowColumn.length; i++) {
//           // console.log(array[i]);
//           document.querySelector('#' + selectedRowColumn[i]).style.background = 'green';
//         }

//         // console.log(selectedRowColumn)
//       }

//     }

//   }

  const triggerColorStands = async () => {
        if (stands[currentStandSelection]) {
            const data = stands[currentStandSelection][1]
            console.log("my dataa", data)
            for (let i = 1; i < superDummmyCoords.length; i++) {
                // await sleep(10000)
                const item = superDummmyCoords[i]
                const row = item.lat
                const col = item.lng
                const coords = `row_${row}col_${col}`
                if (coords in data) {
                    setSelectedRowColumn([...selectedRowColumn, coords]);
                    for (let i = 0; i < selectedRowColumn.length; i++) {
                    // console.log(array[i]);
                    document.querySelector('#' + selectedRowColumn[i]).style.background = 'green';
                    }
                }
            
        }
    }
  }

  

  const getCellCoords = (index) => ({
    x: index % numBoxes,
    y: numBoxes - Math.floor(index / numBoxes) - 1,
  });


  const clearSelectionByCells = (selectedCellsToRemove) => {
    setSelections(prevSelections => {
      // Convert the array of cells to remove into a Set for efficient lookup
      const cellsToRemoveSet = new Set(selectedCellsToRemove);

      // Filter out the selection that matches the cells to remove
      const newSelections = prevSelections.filter(selection => {
        // Check if the selection has any of the cells to remove
        const hasCellToRemove = Array.from(selection).some(cell => cellsToRemoveSet.has(cell));
        return !hasCellToRemove;
      });

      return newSelections;
    });
  };

  const gridCells = Array.from({ length: numBoxes * numBoxes }, (_, index) => index);

  const canvasStyle = useMemo(() => ({
    position: 'relative',
    width: `${canvasSize}cm`, // Set the width of the canvas
    height: `${canvasSize}cm`, // Set the height of the canvas
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }), [canvasSize]);



  useEffect(() => {
    triggerColorStands()
  }, [currentStandSelection]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let data1 = await GetStandWithData();
        console.log("data source", data1?.data.response);
        setStandWithData(data1?.data.response);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    if (standWithData && standWithData.length > 0) {
      console.log("standwith-data", standWithData);
  
      const filtered_data = filterNonEmptyArrays(standWithData[0]);
      let final_data = extractStandData(filtered_data);
      setfilteredSWData(final_data);
      setStands(final_data);
      console.log("final-filtered-standwithdata", filteredSWData);
    }
  }, [standWithData]);
  





  return (

    <>

      <div style={{
        margin: '3px',
        display: 'flex',
        flexDirection: 'row',
        gap: 10, zIndex: 10,
        position: 'fixed',
      }}>

        Refresh
      </div>

      <div style={canvasStyle}>
        <div style={{
          position: 'absolute',
          left: `${boxSize * 10}cm`,
          top: `${boxSize * 10}cm`,
          width: `${canvasSize - boxSize * 20}cm`,
          height: `${canvasSize - boxSize * 20}cm`,
          zIndex: -1 // To place it beneath the grid
        }}>
          <img
            src={map}
            alt="Background"
          />
        </div>

        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numBoxes}, ${boxSize}cm)`,
            gridTemplateRows: `repeat(${numBoxes}, ${boxSize}cm)`,
            width: `${canvasSize}cm`,
            height: `${canvasSize}cm`,
            border: '0.1px solid black',
            userSelect: 'none' // Prevent text selection
          }}
          onMouseLeave={() => isDragging && setIsDragging(false)}
        >
          {gridCells.map((cellIndex) => {
            const selectionIndex = selections.findIndex(selection => selection.has(cellIndex));
            const isSelected = selectionIndex !== -1;
            const { x, y } = getCellCoords(cellIndex);
            // const color = isSelected ? selectionColors[selectionIndex] : 'transparent';
            let tempID = `row_${y}col_${x}`;
            // console.log("tempID", tempID)

            // { Array.from(selectedRowColumn).includes(tempID) ? console.log("COLOR PRESENT", tempID) : console.log("NO COLOR PRESENT", tempID) }
            const color = Array.from(selectedRowColumn).includes(tempID) ? "green" : 'transparent';
            // triggerColor()
            return (

              <div
                key={cellIndex}
                id={`row_${y}col_${x}`}
                className={`box ${isSelected ? 'selected' : ''}`}
                style={{
                  border: '0.1px solid #ffff',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  backgroundColor: Array.from(selectedRowColumn).includes(`row_${y}col_${x}`) ? "green" : 'transparent'
                }}
                // onMouseDown={() => handleMouseDown(cellIndex)}
                // onMouseEnter={() => handleMouseEnter(cellIndex)}
                // onMouseUp={handleMouseUp}
                onClick={() => { console.log(tempID, typeof selectedRowColumn) }}
              />
            );
          })}
        </div>
      </div>

      {/* <ModalComponent
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        coordinates={coordinates}
        cellCoords={selectedCellCoordinates}
        selectedCells={cellsSelected}
        clearSelectionByCells={clearSelectionByCells}
        selectionColors={selectionColors}
        setSelectionColors={setSelectionColors}
        currentSelection={currentSelection}
      /> */}
    </>
  );
};

export default Canvas2;