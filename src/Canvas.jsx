import React, { useState, useMemo, useEffect } from 'react';
import map from "./assets/Updated_Venue_Map_Aligned_50_x_50_cm.svg"
import { ModalComponent } from './Modal'
import get_row_column from './GerPoints';
import { UseStateContext } from "./Context/Context.jsx";
import SupperDummyData from './data/seperDummyData'
import UserCoordinatesData from './data/UserCoordinatesData'
import EachUserCoords from './data/EachUserCoords'

function AppendItems(arr, newStr) {
  return arr.push(newStr)
}
const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));
const Canvas = () => {
  const {  
    workspaceData, 
    setWorkspaceData, 
    count, 
    setCount, } = UseStateContext()
  const canvasSize = 52; // in centimeters
  const boxSize = 1; // in centimeters
  const numBoxes = canvasSize / boxSize; // Number of boxes per side
  const [selectedRowColumn, setSelectedRowColumn] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const [selections, setSelections] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [selectionColors, setSelectionColors] = useState([]);
  const [cnt, setCnt] = useState(0)
 
  function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
  }

// let userId = SupperDummyData.find(data => data.user_id === workspaceData.user_id)
// if(userId) {
//   const index = SupperDummyData.findIndex(item => item.id === workspaceData.user_id);
//   SupperDummyData.splice(index, 1)
//   SupperDummyData.push(workspaceData)
// }else if(isEmptyObject(workspaceData) !== true){
//   SupperDummyData.push(workspaceData)
// }




  useEffect(()=>{
    setCoordinates(EachUserCoords)
  }, [count])

  console.log(coordinates, "TTTTTTTTTTTTTTTT")

  const triggerColor = async () => {
    if (selectedRowColumn.length < 8) {
      for (let i = 0; i < EachUserCoords.length; i++) {
        console.log("hhhhhhhhhhhhhhhhhhhttttttttttttt",selectedRowColumn)
        // await sleep(10000)
        const item = EachUserCoords[i]
        const row = Math.round(item.lat)
        const col = Math.round(item.lng)
        const coords = `row_${row}col_${col}`
        setSelectedRowColumn([...selectedRowColumn, coords]);
        for (let i = 0; i < selectedRowColumn.length; i++) {
          // console.log(array[i]);
          document.querySelector('#' + selectedRowColumn[i]).style.background = 'green';
        }

        console.log(selectedRowColumn)
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
    marginLeft: '235px'
  }), [canvasSize]);




  useEffect(() => {
    triggerColor()
  }, [count]);


  return (
    <>
      {/* <div style={{
        margin: '3px',
        display: 'flex',
        flexDirection: 'row',
        gap: 10, zIndex: 10,
        position: 'fixed',
        backgroundColor: 'purple'
      }}>
       <h1>Hello</h1>
      
      </div> */}

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
            let tempID = `row_${y}col_${x}`;
            const color = Array.from(selectedRowColumn).includes(tempID) ? "green" : 'transparent';

            return (
              <div
                key={cellIndex}
                id={`row_${y}col_${x}`}
                className={`box ${isSelected ? 'selected' : ''}`}
                style={{
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  backgroundColor: Array.from(selectedRowColumn).includes(`row_${y}col_${x}`) ? "green" : 'transparent'
                }}
                onClick={() => { console.log(tempID, typeof selectedRowColumn) }}
              />
            );
          })}
        </div>
      </div>

    </>
  );
};

export default React.memo(Canvas);