export default function serialize(form){
  const data = [];

  [... form].forEach((el) => {
    data[el.name] = el.value;
  });

  return data;
}

