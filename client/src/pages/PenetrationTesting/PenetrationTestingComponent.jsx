import React, { useRef, useState } from 'react';
import useTestingData from './../../hooks/testing';

function PenetrationTestingComponent() {
  const { loading, error, getTestingData } = useTestingData();
  const [res, setRes] = useState(null);
  const urlRef = useRef(null);

  const handleTestClick = async () => {
    console.log(urlRef.current.value);
    try {
      const result = await getTestingData({ url: urlRef.current.value });
      console.log(result);
      setRes(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="card" style={{ padding: '20px', borderRadius: '8px' }}>
        <h2 className="text-center" style={{ marginBottom: '24px' }}>Penetration Testing Tool</h2>
        <div className="form-group">
          <input
            ref={urlRef}
            type="text"
            className="form-control"
            placeholder="Enter URL"
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={handleTestClick}
          disabled={loading}
        >
          {loading ? 'Running test...' : 'Run Test'}
        </button>
        {error && (
          <div className="alert alert-danger" role="alert" style={{ marginTop: '20px' }}>
            There was an error processing your request.
          </div>
        )}
        {!loading && res && (
          <div style={{ marginTop: '20px' }}>
            {/* {res.length ? res.map(data => (
              <p key={data.id}>{data.confidence}</p>
            )) : <p>No results found.</p>} */}

            display pdf here
          </div>
        )}
      </div>
    </div>
  );
}

export default PenetrationTestingComponent;
