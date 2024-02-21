const save_deal_url = "http://localhost:8080/api/deal/save";
const get_deals_url = "http://localhost:8080/api/deal/deals";

export const saveDeal = async (dealInfo) => {
  const response = await fetch(save_deal_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dealInfo),
  });

  const message = await response.text();
  if (response.status !== 200) {
    throw new Error(message);
  }
};

export const getDeals = async () => {
  try {
    const response = await fetch(get_deals_url);
    if (response.status !== 200) {
      return [];
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return [];
  }
};
