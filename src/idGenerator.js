// Simple idGenerator component
// built 7/1/21 (actually a few days earlier)

const idGenerator = () => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    return uniqid;
  };

  export default idGenerator;