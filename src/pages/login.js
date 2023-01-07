function callChild() {
  return <span> {getChild()} </span>;
}
function getChild() {
  const array = [1,2,3,4,5];
  return (
  <>
   {array.map((key, value)=>{
      return <span> {key} -> {getChildAgain()} <br/></span>;
    })
  }
  </>
  );
}
function getChildAgain() {
  const array = [1,2,3,4,5];
  return (
  <>
   {array.map((key, value)=>{
      return <span> {key} </span>;
    })
  }
  </>
  );
}
const Login = () => {
  const arr = [1, 2, 3, 4, 5]
  const array = [1, 2, 3, 4, 5]
  return (
    <div>
      Component
      {
        arr.map((item, index) => {
          return <div> {item} -&gt; <br/>{callChild()} <br/> </div> 
        }
          )
        }
    </div>
  );
};

export default Login;