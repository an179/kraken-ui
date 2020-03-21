import * as ActionCreators from '../../../redux/actions/ActionCreators'
import * as ActionTypes from '../../../redux/actions/ActionsTypes'
import {afakeBlotterItem, TestData} from '../../resources/fakeTreeStructuredData';

describe('actions', () => {
  it('should create an action to update data', () => {
    const fakeBlotterUpdateAction: ActionTypes.BlotterUpdateAction<TestData> = {
      type: ActionTypes.BLOTTER_UPDATE,
      payload: afakeBlotterItem
    }
    expect(ActionCreators.singleDataUpdate(afakeBlotterItem)).toEqual(fakeBlotterUpdateAction)
  })
})