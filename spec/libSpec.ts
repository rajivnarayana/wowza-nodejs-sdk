import {publishers} from "../";

describe("UAT" , () => {

    let initialPublishersLength;
    const publisherName = "someName";

    it('List all live publishers', async (done) => {
        let publishersList : any = await publishers.list();
        initialPublishersLength = publishersList.publishers.length; 
        expect(initialPublishersLength).toBeGreaterThan(0);
        done();
    })

    it('Add a new publisher', async (done) => {
        const publisher : Publisher = {
            "password": "something1234",
            "publisherName" : publisherName,
            "serverName": "_defaultServer_",
            "description" : "My own description",
            "version" : "1"
        };
        let response = await publishers.create(publisher);
        expect(response.success).toBeTruthy();
        done();
    })

    it('List all live publishers after create', async (done) => {
        let publishersList : any = await publishers.list();
        expect(publishersList.length).toBeGreaterThan(initialPublishersLength);
        done();
    })

    it('Delete the added publisher', async (done) => {
        let response = await publishers.remove(publisherName);
        expect(response.code).not.toBe("404");
        done();
    });

    it('List all live publishers after deleting', async (done) => {
        let publishersList : any = await publishers.list();
        expect(publishersList.length).toEqual(initialPublishersLength);
        done();
    })
})