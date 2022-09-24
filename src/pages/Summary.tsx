import Card from 'components/containers/Card';
import { IPackageValues } from 'components/forms/forms.interface';
import { countries, ICountry } from 'data/countries';
import { packages } from 'data/packages';
import { getParams } from 'lib/helpers';
import { calculatePremium, DefaultKeys, getData } from 'lib/insurance.helpers';
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Summary() {
  const params = getParams();
  const navigate = useNavigate();
  const { name, age, country, premium } = params;
  const backLinks = new URLSearchParams(params).toString();
  const premiumData = getData(packages, DefaultKeys.VALUE, premium) as IPackageValues;
  const countryData = getData(countries, DefaultKeys.VALUE, country) as ICountry;
  const userAge = age || 0;
  const totalPremium = calculatePremium(countryData.rate, premiumData.percentageAddOn, userAge as number);

  useEffect(()=>{
    // if user goes to this page directly, redirect to 404
    if(Object.keys(params).length != 4){
      navigate('/not-found')
    }
  })
  return (
    <Card>
      <div>
        <div className="space-y-5">
          <h2>{name}'s Summary</h2>

          <p id="name">Name: {name}</p>
          <p id="age">Age: {age}</p>
          <p id="country">Where do you live: {countryData.name}</p>
          <p id="premium">Package: {premiumData.name}</p>
          <p id="total">
            Premium: {totalPremium} {countryData.currency}
          </p>
        </div>
        <div className="flex justify-between mt-16">
          <Link to={'/start/?' + backLinks} className="primary-button-border">
            Back
          </Link>
          <Link to="/" className="primary-button">
            Buy
          </Link>
        </div>
      </div>
    </Card>
  );
}
