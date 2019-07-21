'use strict';

import Store from './Store';

class FileStore extends Store{
  constructor(initialState){
    super();
    this.state = {
      files:initialState.push[''],
      selectedFileIndex: 0
    };
  }
}

const fileStore = new FileStore([]);

export default fileStore;
