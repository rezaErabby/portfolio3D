export default function DescriptionComponent({onClose}){
    return (
        <div style={{ position: 'fixed', right: 0, top: 0, padding: '20px', background: 'black', color: 'white' }}>
          <h2>Description Header</h2>
          <p>This is the description paragraph.</p>
          {/* ... Add more content as needed */}
          <button onClick={onClose}>Close</button>
        </div>
      );
}