import Content, { ContentDocument } from "../models/content";

const createContent = async (
  content: ContentDocument
): Promise<ContentDocument> => {
  return await Content.create(content);
};

const getContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findById({ id: contentId });
  return contentById;
};

const deleteContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findByIdAndDelete({ id: contentId });
  return contentById;
};
export default { createContent, getContentById, deleteContentById };