export default function PropsGreeting(props) {
  console.log('props', props); // Log out all props
  return (
    <div
      style={{
        color: '#1D10C1',
        fontSize: '50px',
        width: '100%',
        fontweight: 'bold',
      }}
    >
      Welcome to the Random Color Generator !
    </div>
  );
}
