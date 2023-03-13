const myLogger = (store) => (next) => (action) => {
  console.log(action);
  //next === store.dispatch
  //const result = store.dispatch(action);
  const result = next(action);
  console.log("\t", store.getState());
  return result;
};

export default myLogger;
