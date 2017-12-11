import expect from 'expect';
import * as couseActions from './courseActions';
import * as types from './actionsTypes';

// test sync actions
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = couseActions.createdCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
