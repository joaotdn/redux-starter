import * as types from './actionsTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updatedCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createdCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course }
}

export function loadCourses() {
  return function (dispatch) {
    // retorna uma promise
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
      .catch(error => {
        throw (error);
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return CourseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updatedCourseSuccess(savedCourse)) : dispatch(createdCourseSuccess(savedCourse));
    });
  };
}
