import { singleDataUpdateReducer } from '../../../redux/reducers/BlotterSingleDataReducer'
import { afakeBlotterItem, aFakeBlotterItemUpdate, anotherFakeBlotterItem} from '../../resources/fakeTreeStructuredData';
import {updateData} from '../../../redux/actions/ActionCreators';

describe('blotter update reducer', () => {

  it('should return add payload data to state when valid data is passed', () => {
    expect(singleDataUpdateReducer(undefined, updateData(afakeBlotterItem))).toEqual([afakeBlotterItem])
    expect(singleDataUpdateReducer([afakeBlotterItem], updateData(anotherFakeBlotterItem))).toEqual([afakeBlotterItem, anotherFakeBlotterItem])
  })

  it('should return update payload data to state when the same currency pair is passed', () => {
    expect(singleDataUpdateReducer([afakeBlotterItem, anotherFakeBlotterItem], updateData(aFakeBlotterItemUpdate))).toEqual([aFakeBlotterItemUpdate, anotherFakeBlotterItem])
  })
});