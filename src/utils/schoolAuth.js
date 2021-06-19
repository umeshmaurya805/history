export const saveSchoolAuth = (data) => {
  localStorage.setItem(
    `${process.env.REACT_APP_PREFIX}-schoolAuth`,
    JSON.stringify(data)
  );
};

export const removeSchoolAuth = () => {
  localStorage.removeItem(`${process.env.REACT_APP_PREFIX}-schoolAuth`);
};

export const getSchoolAuth = () => {
  let data = localStorage.getItem(`${process.env.REACT_APP_PREFIX}-schoolAuth`);

  const getInitialState = () => ({
    accessToken: null,
    expiresAt: Date.now(),
  });

  if (!data) return getInitialState();
  
  data = JSON.parse(data);

  return data.expiresAt > Date.now() ? data : getInitialState();
};
