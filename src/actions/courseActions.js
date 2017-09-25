import * as types from './actionsTypes';

export default {
  createCourse(course) {
    return { type: types.CREATE_COURSE, course };
  }
};
