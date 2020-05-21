const protocol =
  process.env.NODE_ENV !== "development" ? "https://" : "http://";

const fetchFromUtils = async () => {
  const resp = await fetch(
    protocol + process.env.NEXT_PUBLIC_VERCEL_URL + `/api/runtime`
  );
  const data = await resp.json();
  return data;
};

export default fetchFromUtils;
