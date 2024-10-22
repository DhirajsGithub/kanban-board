import {API_ENDPOINT} from "../constants/apiConstants";

const fetchKanbanBoardData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      return data;
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
      return err;
    }
  };
export {fetchKanbanBoardData}