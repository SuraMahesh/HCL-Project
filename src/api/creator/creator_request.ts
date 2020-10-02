import { apiInstance } from "../apiInstance";
import { CreatorCreateData } from "../interfaces";
import { CreatorUpdateData } from "../interfaces";

export async function getAllCreators() {
  try {
    const res = await apiInstance.get("/creator/list");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function getCreatorById(creatorId: string) {
  try {
    const res = await apiInstance.get("/creator/get/" + creatorId, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function createCreator(data: CreatorCreateData) {
  try {
    const res = await apiInstance.post("/creator/add", data, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function updateCreator(data: CreatorUpdateData) {
  try {
    const res = await apiInstance.put("/creator/update", data, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteCreator(creatorId: string) {
  try {
    const res = await apiInstance.delete("/creator/delete/" + creatorId, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
