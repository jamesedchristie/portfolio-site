import React from 'react';
import CSS from 'csstype';

export function Planet({ diameter }: { diameter: number }) {
  
  const outerRingDiameter = diameter * 0.6;
  const numberOfMoons = Math.ceil(Math.random() * 3);
  const numberOfRings = Math.ceil(Math.random() * 5);
  const planetColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  const ringColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  const moonColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

  return (
    <div
      id="orbit1"
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        borderRadius: '100%',
        display: 'flex',
        flexDirection: 'column',
        animation: 'revolve 20s infinite linear',
      }}
    >
      <div
        id="moon1"
        style={{
          width: `${diameter * 0.05}px`,
          height: `${diameter * 0.05}px`,
          backgroundColor: moonColor,
          borderRadius: '100%',
        }}
      ></div>
      <div
        id="orbit2"
        style={{
          width: `${diameter * 0.85}px`,
          height: `${diameter * 0.85}px`,
          borderRadius: '100%',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          animation: 'revolve 80s infinite linear',
        }}
      >
        {numberOfMoons > 1 && <div
          id="moon2"
          style={{
            width: `${diameter * 0.05}px`,
            height: `${diameter * 0.05}px`,
            backgroundColor: moonColor,
            borderRadius: '100%',
          }}
        ></div>}
        <div
          id="orbit3"
          style={{
            width: `${diameter * 0.7}px`,
            height: `${diameter * 0.7}px`,
            borderRadius: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            animation: 'revolve 80s infinite linear',
          }}
        >
          {numberOfMoons > 2 && <div
            id="moon3"
            style={{
              width: `${diameter * 0.05}px`,
              height: `${diameter * 0.05}px`,
              backgroundColor: moonColor,
              borderRadius: '100%',
            }}
          ></div>}
          <div
            id="ring"
            style={{
              width: `${outerRingDiameter}px`,
              height: `${outerRingDiameter}px`,
              borderRadius: '100%',
              border: numberOfRings > 4 ? `1px solid ${ringColor}` : '',
              display: 'flex',
              flexDirection: 'column',
              margin: 'auto',
            }}
          >
            <div
              id="ring2"
              style={{
                width: `${outerRingDiameter * 0.9}px`,
                height: `${outerRingDiameter * 0.9}px`,
                borderRadius: '100%',
                border: numberOfRings > 2 ? `1px solid ${ringColor}` : '',
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
              }}
            >
              <div
                id="ring3"
                style={{
                  width: `${outerRingDiameter * 0.8}px`,
                  height: `${outerRingDiameter * 0.8}px`,
                  borderRadius: '100%',
                  border: numberOfRings > 0 ? `1px solid ${ringColor}` : '',
                  display: 'flex',
                  flexDirection: 'column',
                  margin: 'auto',
                }}
              >
                <div
                  id="ring4"
                  style={{
                    width: `${outerRingDiameter * 0.7}px`,
                    height: `${outerRingDiameter * 0.7}px`,
                    borderRadius: '100%',
                    border: numberOfRings > 1 ? `1px solid ${ringColor}` : '',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                  }}
                >
                  <div
                    id="ring5"
                    style={{
                      width: `${outerRingDiameter * 0.6}px`,
                      height: `${outerRingDiameter * 0.6}px`,
                      borderRadius: '100%',
                      border: numberOfRings > 3 ? `1px solid ${ringColor}` : '',
                      display: 'flex',
                      flexDirection: 'column',
                      margin: 'auto',
                    }}
                  >
                    <div
                      id="planet"
                      style={{
                        width: `${outerRingDiameter * 0.4}px`,
                        height: `${outerRingDiameter * 0.4}px`,
                        borderRadius: '100%',
                        margin: 'auto',
                        backgroundColor: planetColor,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {numberOfMoons > 2 && <div
            className="offset"
            style={{
              width: `${diameter * 0.09}px`,
              height: `${diameter * 0.09}px`,
            }}
          ></div>}
        </div>
        {numberOfMoons > 1 && <div
          className="offset"
          style={{
            width: `${diameter * 0.09}px`,
            height: `${diameter * 0.09}px`,
          }}
        ></div>}
      </div>
      <div
        className="offset"
        style={{
          width: `${diameter * 0.09}px`,
          height: `${diameter * 0.09}px`,
        }}
      ></div>
    </div>
  );
}
