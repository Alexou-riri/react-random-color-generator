import './PropsGreeting.css';
import './App.css';

export default function PropsGreeting(props) {
  console.log('props', props); // Log out all props
  return (
    <div
      className="greeting"
      style={{
        color: '#1D10C1',
        fontweight: 'bold',
        fontFamily: 'Verdana',

        //backgroundColor: '#FBE3B7',
      }}
    >
      Welcome to the Random Color Generator !
    </div>
  );
}
