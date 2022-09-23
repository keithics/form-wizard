import Card from 'components/containers/Card';
import { TextInputTypes } from 'components/forms/forms.interface';
import Input from 'components/forms/Input';
import Select from 'components/forms/Select';
import PackageRadio from 'components/insurance/PackageRadio';
import { TotalPremium } from 'components/insurance/TotalPremium';
import { countries } from 'data/countries';
import { packages } from 'data/packages';
import { getParams } from 'lib/helpers';
import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export interface IFormValues {
  name: string;
  age: number;
  country: string;
  premium: string;
}

type IForm = keyof IFormValues;

export default function Start() {
  const methods = useForm<IFormValues>();
  const navigate = useNavigate();
  const params = getParams();

  // prefill data
  useEffect(() => {
    for (const property in params) {
      methods.setValue(property as IForm, params[property]);
    }
  });

  const { register, handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { name, age, country, premium } = data;
    const summaryLink = `/summary/?name=${name}&age=${age}&country=${country}&premium=${premium}`;
    const nextPage = age > 100 ? '/invalid-age' : summaryLink;
    return navigate(nextPage);
  };

  return (
    <Card>
      <>
        <h2>Tell us about yourself</h2>
        <FormProvider {...methods}>
          <form className="mt-12 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} label="Name" name="name" required={true} />

            <Input register={register} label="Age" name="age" type={TextInputTypes.Number} required={true} min={0} />
            <Select register={register} values={countries} label="Where do you life" name="country" required={true} />
            <div>
              <PackageRadio values={packages} label="" name="premium" required={true} />
              <TotalPremium control={control} />
            </div>
            <div className="flex justify-between mt-16">
              <Link to="/" className="primary-button-border">
                Back
              </Link>
              <button className="primary-button">Next</button>
            </div>
          </form>
        </FormProvider>
      </>
    </Card>
  );
}
