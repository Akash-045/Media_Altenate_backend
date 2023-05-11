import Content from "../src/models/Content";
import ContentServices from "../src/services/content";

import { createContentController } from "./../src/controllers/contents";

describe("content controller", () => {
  it("should create new content", async () => {
    const res: any = {};
    res.json = jest.fn(() => res);
    res.status = jest.fn(() => res);

    const nextMock = jest.fn();
    const req = {
      body: {
        title: "test",
        partnerId: "1oai9d",
        description: "test",
        originalUrl: "test",
        publishDate: "test",
        paragraph: "test",
        images: [],
        videos: [],
      },
    };
    const service = jest
      .spyOn(ContentServices, "createContent")
      .mockImplementation(() => req.body as any);

    await createContentController(req as any, res as any, nextMock);

    expect(service).toBeCalledTimes(1);
    expect(service).toBeCalledWith(expect.objectContaining({ ...req.body }));

    expect(res.json).toBeCalledTimes(1);
    expect(res.json).toBeCalledWith(req.body);

    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(201);

    expect(nextMock).toBeCalledTimes(0);
  });
});