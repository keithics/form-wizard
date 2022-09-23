import Card from 'components/containers/Card';
import React from 'react';
import { Link } from 'react-router-dom';

export default function InvalidAge() {
  return (
    <Card>
      <div>
        <h2>Tell us about yourself</h2>
        <div className="text-center mt-8">
          <p>Sorry, your age is over our accepted limit.</p>
          <p>We are sorry but we cannot insure you now.</p>
        </div>

        <Link to="/">
          <button className="mt-12 w-full primary-button"> Ok :( </button>
        </Link>
      </div>
    </Card>
  );
}
