export default function PropsGreeting(props) {
  console.log('props', props); // Log out all props
  return (
    <div
      style={{
        color: '#D33131',
        fontSize: '70px',
        width: '100%',
        fontweight: 'bold',


      }}
    >
      Welcome to the Random Color Generator !
    </div>
  );
}