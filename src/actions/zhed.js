import {
  COMPLETE_INITIALIZE_ZHED,
  COMPLETE_SELECT_ZHED_BUTTON,
  COMPLETE_SELECT_ZHED_DOT,
  COMPLETE_RESTART_ZHED,
  COMPLETE_UNDO_ZHED,
} from '../constants/ActionTypes'
import * as CurrentLevelAction from './currentLevel'
import * as BlockMapListAction from './blockMapList'
import * as BlockMapAction from './blockMap'
import * as BackgroundMapAction from './backgroundMap'
import * as IndicatorMapAction from './indicatorMap'
import * as IndicatorListAction from './indicatorList'
import * as BlockMapHistoryAction from './blockMapHistory'
import ZhedAPI from '../api'

function completeInitializeZhed() {
  return {
    type: COMPLETE_INITIALIZE_ZHED,
    code: COMPLETE_INITIALIZE_ZHED,
  }
}

export function initailizeZhed(level) {
  return (dispatch, getState) => {
    dispatch(CurrentLevelAction.selectCurrentLevel(level))
    dispatch(BlockMapListAction.reqeustBlock(level))
    return ZhedAPI.getBlockMap(level)
      .then(block => {
        dispatch(BlockMapListAction.receiveBlock(level, block))
        dispatch(BlockMapAction.initializeBlockMap(block))
        dispatch(BackgroundMapAction.initailize())
        dispatch(IndicatorMapAction.reset())
        dispatch(IndicatorListAction.resetIndicatorList())
        dispatch(BlockMapHistoryAction.resetBlockMapHistory())
        dispatch(completeInitializeZhed())
      })
  }
}

function completeSelectZhedButton() {
  return {
    type: COMPLETE_SELECT_ZHED_BUTTON,
    code: COMPLETE_SELECT_ZHED_BUTTON,
  }
}

export function selectZhedButton({ rowIdx, colIdx }) {
  return (dispatch, getState) => {
    dispatch(IndicatorMapAction.reset())
    dispatch(IndicatorListAction.stack({ rowIdx, colIdx }))
    setTimeout(() => {
      dispatch(IndicatorMapAction.unfold())
      dispatch(completeSelectZhedButton())
    }, 50)
  }
}

function completeSelectZhedDot() {
 return {
   type: COMPLETE_SELECT_ZHED_DOT,
   code: COMPLETE_SELECT_ZHED_DOT,
 }
}

export function selectZhedDot({ rowIdx, colIdx }) {
  return (dispatch, getState) => {
    dispatch(IndicatorMapAction.reset())
    dispatch(BlockMapHistoryAction.next())
    dispatch(BlockMapAction.unfold({ rowIdx, colIdx }))
    dispatch(IndicatorListAction.resetIndicatorList())
    dispatch(completeSelectZhedDot())
  }
}

function completeRestartZhed() {
  return {
    type: COMPLETE_RESTART_ZHED,
    code: COMPLETE_RESTART_ZHED,
  }
}

export function restartZhed() {
  return (dispatch, getState) => {
    dispatch(completeRestartZhed())
  }
}

function completeUndoZhed() {
  return {
    type: COMPLETE_UNDO_ZHED,
    code: COMPLETE_UNDO_ZHED,
  }
}

export function undoZhed() {
  return (dispatch, getState) => {
    dispatch(completeUndoZhed())
  }
}
