export interface Listfile {
  id: number;
  name: string;
  color: string;
  handlerClick:Function
}

// api interfaces
export interface categoriesInterface {
  type: string;
  color: string;
  percent: number;
}

export interface labelsinterface {
  _id: number;
  name: string;
  type: string;
  color: string;
}

export interface createTransaction {
  name: string;
  type: string;
  amout: number;
}
