import React, { Fragment, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Card from '../../components/Card';
import CardForm from '../../components/CardForm';
import {  updateLocalStorageCards } from '../CreditCard';

const initialState = {
  id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export default function AddCard() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || '',
      });
    },
    [state],
  );

  function handleSubmitAction() {
    try {
      let newCardsList= [];
      if (localStorage.getItem('cards')) {
        const storageCards = JSON.parse(localStorage.getItem('cards') ?? '');
        newCardsList = storageCards ? [...storageCards] : [];
      }

      newCardsList.push({
        ...state,
        id: uuid(),
      });
      updateLocalStorageCards(newCardsList);
      navigate('/');
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      //release resources or stop loader
    }
  }

  return (
    <Fragment>
      <div className="add-card-content">
        <div className="wrapper">
          <CardForm
            selectedCreditCard={state}
            onUpdateState={updateStateValues}
            setIsCardFlipped={setIsCardFlipped}
            handleSubmitAction={handleSubmitAction}
          >
            <Card
              cardNumber={state.cardNumber}
              cardHolder={state.cardHolder}
              cardMonth={state.cardMonth}
              cardYear={state.cardYear}
              cardCvv={state.cardCvv}
              isCardFlipped={isCardFlipped}
            ></Card>
          </CardForm>
        </div>
      </div>
    </Fragment>
  );
}
