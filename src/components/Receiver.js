function Receiver(props) {
  return <div> <br/> Received: <br/>
        <p style={{ color: props.color }}>{props.message}</p>
        </div>;
}

// method 1
// function Receiver(props) {
//   return <div> <br/> Received: <br/>
//         <p style={{ color: props.color }}>{props.message}</p>
//         </div>;
// }

// method 2
// function Receiver(props) {
//   const { message, color } = props;
//   return <p style={{ color }}>{message}</p>;
// }
export default Receiver;
