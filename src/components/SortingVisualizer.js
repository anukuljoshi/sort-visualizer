import React, { useState } from 'react';
import { Button } from './input/buttons';
import { mergeSort } from '../helpers/mergeSort';
import { bubbleSort } from '../helpers/bubbleSort';
import { selectionSort } from '../helpers/selectionSort';
import { insertionSort } from '../helpers/insertionSort';
import { quickSort } from '../helpers/quickSort';
import { heapSort } from '../helpers/heapSort';

const TIMEOUT = 5;
const PRIMARY_COLOR = '#0a8d80'; //Normal color of bars
const SECONDARY_COLOR = '#FF00FF'; //Color of bars when they are being compared
const SIZE_OF_ARRAY = 50;
const MIN_VALUE = 20;
const MAX_VALUE = 500;

const generateRandomNumbers = (n, min, max) => {
    let nums = [];
    for(let i=0;i<n;i++){
        nums.push(Math.floor(Math.random() * (max - min) + min));
    }
    return nums;
}

const SortingVisualizer = (props) => {
    const [array, setArray] = useState(generateRandomNumbers(SIZE_OF_ARRAY, MIN_VALUE, MAX_VALUE));

    const resetArray = () => {
        setArray(generateRandomNumbers(SIZE_OF_ARRAY, MIN_VALUE, MAX_VALUE));
        enableButtons();
    }

    const disableButtons = () => {
        const btns = document.getElementsByClassName('btn');
        for(let i=0;i<btns.length;i++){
            btns[i].disabled = true;
            btns[i].classList.remove('input-btn');
            btns[i].classList.add('disabled-btn');
        }
    }

    const enableButtons = () => {
        const btns = document.getElementsByClassName('btn');
        for(let i=0;i<btns.length;i++){
            btns[i].disabled = false;
            btns[i].classList.remove('disabled-btn');
            btns[i].classList.add('input-btn');
        }
    }

    // normal timeout function does not return a Promise therefore cannot be used in an async/await function
    const asyncTimeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleCompareValues = async (index1, index2, i, color, graphBars) => {
        await asyncTimeout(TIMEOUT);
        graphBars[index1].style.backgroundColor = color;
        graphBars[index2].style.backgroundColor = color;
    }

    const handleSwapValues = async (index, value, i, graphBars) => {
        await asyncTimeout(TIMEOUT);
        graphBars[index].style.height = value + 'px';
    }

    const animate = async (animations) => {
        for(let i=0;i<animations.length;i++){
            const isComparison = (animations[i][0]==='compare_start') ||(animations[i][0]==='compare_end');
            const graphBars = document.getElementsByClassName('graph-bar');
        
            if(isComparison===true){
                const [comparison, index1, index2] = animations[i];
                const color = (animations[i][0]==='compare_start') ? SECONDARY_COLOR : PRIMARY_COLOR;

                if(index1<0 || index1>=array.length){
                    continue;
                }
                if(index2<0 || index2>=array.length){
                    continue;
                }
                await handleCompareValues(index1, index2,  i, color, graphBars);
            }
            else{
                const [swap, index, value] = animations[i];
                if(index<0 || index>=array.length){
                    continue;
                }
                await handleSwapValues(index, value, i, graphBars);
            }
        }
    }

    const mergeSortCall = async () => {
        disableButtons();
        const animations = mergeSort(array);
        await animate(animations);
        enableButtons();
    }

    const bubbleSortCall = async () => {
        disableButtons();
        const animations = bubbleSort(array);
        await animate(animations);
        enableButtons();
    }

    const selectionSortCall = async () => {
        disableButtons();
        const animations = selectionSort(array);
        await animate(animations);
        enableButtons();
    }
    
    const insertionSortCall = async () => {
        disableButtons();
        const animations = insertionSort(array);
        await animate(animations);
        enableButtons();
    }
    
    const quickSortCall = async () => {
        disableButtons();
        const animations = quickSort(array);
        await animate(animations);
        enableButtons();
    }

    const heapSortCall = async () => {
        disableButtons();
        const animations = heapSort(array);
        await animate(animations);
        enableButtons();
    }

    return (
        <>
            <div className="input-container">
                <div className="btn-group">
                    <Button value="Reset Array" clickFunction={resetArray} />
                    <Button value="Bubble Sort" clickFunction={bubbleSortCall} />
                    <Button value="Selection Sort" clickFunction={selectionSortCall} />
                    <Button value="Insertion Sort" clickFunction={insertionSortCall} />
                    <Button value="Quick Sort" clickFunction={quickSortCall} />
                    <Button value="Merge Sort" clickFunction={mergeSortCall} />
                    <Button value="Heap Sort" clickFunction={heapSortCall} />
                </div>
            </div>
            <div className="graph-container">
                <div className="graph">
                    {
                        array.map((value, index) => {
                            return (
                                <div 
                                    className="graph-bar" 
                                    style={
                                        {
                                            'height' : `${value}px`,
                                            'width' : `${14}px`,
                                            'marginRight' : `${1}px`
                                        }
                                    }
                                    key={index}
                                >
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SortingVisualizer;