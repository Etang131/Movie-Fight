const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "dcf72138",
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector("input");

const debounce = func => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeout(() => {
      func.apply(null, args);
    }, 1000);
  };
};

let timeoutId;
const onInput = event => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

input.addEventListener("input", onInput);
