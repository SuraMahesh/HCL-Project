import { apiInstance } from "../apiInstance";
import { AdminCreateData } from "../interfaces";
import { AdminUpdateData } from "../interfaces";

export async function getAllAdmins() {
  try {
    const res = await apiInstance.get("/admin/list");
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function getAdminById(adminId: string) {
  try {
    const res = await apiInstance.get("/admin/get/" + adminId, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function createAdmin(data: AdminCreateData) {
  try {
    const res = await apiInstance.post("/admin/add", data, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function updateAdmin(data: AdminUpdateData) {
  try {
    const res = await apiInstance.put("/admin/update", data, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteAdmin(adminId: string) {
  try {
    const res = await apiInstance.delete("/admin/delete/" + adminId, {});
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
