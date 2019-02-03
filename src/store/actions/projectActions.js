export const createProject = (project) =>{
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Busra',
      authorLastName: 'Uludag',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project }); // run action
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROS', err });
    });
  }
};