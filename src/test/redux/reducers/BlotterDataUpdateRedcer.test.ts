import { singleDataUpdateReducer } from '../../../redux/reducers/BlotterSingleDataReducer'
import { afakeBlotterItem, aFakeBlotterItemUpdate, anotherFakeBlotterItem} from '../../resources/fakeTreeStructuredData';
import {singleDataUpdate} from '../../../redux/actions/ActionCreators';

describe('blotter update reducer', () => {

  it('should return add payload data to state when valid data is passed', () => {
    expect(singleDataUpdateReducer(undefined, singleDataUpdate(afakeBlotterItem))).toEqual([afakeBlotterItem])
    expect(singleDataUpdateReducer([afakeBlotterItem], singleDataUpdate(anotherFakeBlotterItem))).toEqual([afakeBlotterItem, anotherFakeBlotterItem])
  })

  it('should return update payload data to state when the same currency pair is passed', () => {
    expect(singleDataUpdateReducer([afakeBlotterItem, anotherFakeBlotterItem], singleDataUpdate(aFakeBlotterItemUpdate))).toEqual([aFakeBlotterItemUpdate, anotherFakeBlotterItem])
  })
});