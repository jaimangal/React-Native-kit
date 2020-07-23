export const ADD_FOOD = 'ADD_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';

export const addFood = (food) => (
  {
    type: ADD_FOOD,
    data: food
  }
);

export const deleteFood = (key) => (
  {
    type: DELETE_FOOD,
    key: key
  }
);
