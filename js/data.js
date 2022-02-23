const getApi = (onSuceess, onError) => {
    fetch('https://sachkovadaria.github.io/flashCards/db.json')
  
      .then(response => {
        if (!response.ok) {
          throw new Error('Упс... ошибка. Уже разбираемся, что стряслось.');
        }
  
        return response.json();
      })
      .then((wordsArr) => {
        onSuceess(wordsArr);
      })
      .catch((error) => {
        onError(error);
      })
  };

const createWord = (adFormData, onSuccess, onError) => {
  console.log(adFormData);
    fetch('http://localhost:3000/cart/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },    
      body: adFormData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        onSuccess();
      })
      .catch(() => {
        onError()
      });
  };


const deleteWord = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'DELETE',   
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        console.log('ok delete');
      })
      .catch(() => {
        console.log('error delete');
      });
  }

const editWord = (adFormData, id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },    
      body: adFormData,  
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        console.log('ok edit');
      })
      .catch(() => {
        console.log('error edit');
      });
  }





export { getApi, createWord,deleteWord, editWord};
