import { TreeStructuredData } from '../../types/CommonTypes'

export interface TestData extends TreeStructuredData {
    data: string
}

export const afakeBlotterItem: TestData = {
    currencyPair: "fake currency pair",
    data: "fake data"
}

export const aFakeBlotterItemUpdate: TestData = {
    currencyPair: "fake currency pair",
    data: "fake data"
}


export const anotherFakeBlotterItem: TestData = {
    currencyPair: "another fake currency pair",
    data: "more fake data"
}