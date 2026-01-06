import axios from "axios";
import type { Note } from "../types/note";

interface NoteHttpResponse {
  notes: Note[];
  totalPages: number;
}

interface CreateNote {
  title: string;
  content: string;
  tag: string;
}
const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: { Authorization: `Bearer ${myKey}` },
});

export const fetchNotes = async (
  search: string,
  page: number
): Promise<NoteHttpResponse> => {
  const res = await api.get<{ notes: Note[]; totalPages: number }>("/notes", {
    params: {
      ...(search !== "" && { search }),
      page,
      perPage: 12,
    },
  });

  return {
    notes: res.data.notes,
    totalPages: res.data.totalPages,
  };
};

export const createNote = async (newNote: CreateNote): Promise<Note> => {
  const res = await api.post<Note>("/notes", newNote);

  return res.data;
};

export const deleteNote = async (noteId: number): Promise<Note> => {
  const res = await api.delete(`/notes/${noteId}`);

  return res.data;
};
