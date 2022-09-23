import Card from 'components/containers/Card';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <Card>
      <>
        <h2 className="h2">Hello There!</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Let's buy some insurance. It is going to take few steps.
        </p>

        <div className="mt-16 flex justify-center	">
          <Link to="/start" className="primary-button">
            Start
          </Link>
        </div>
      </>
    </Card>
  );
}
