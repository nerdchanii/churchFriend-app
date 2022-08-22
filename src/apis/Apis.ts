import {ICallBehavior} from './types';

abstract class Apis {
  CallBehavior: ICallBehavior;
  constructor(CallBehavior: ICallBehavior) {
    this.CallBehavior = CallBehavior;
  }
}

export default Apis;
