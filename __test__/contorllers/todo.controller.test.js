const { getStatusTaskTotal } = require("../../src/controllers/todo.controller")

const mockGetTodos = jest.fn();

describe("exemple", () => {
    beforeEach(() => {
        // Réinitialisez le mock avant chaque test
        mockGetTodos.mockReset();
    });
    
    it("should return the total number of tasks with the specified status", () => {

        const Todos = [
            {
                "id": 1,
                "title": "Faire les courses!",
                "due_date": "2024-05-10",
                "completed_date": null,
                "status": "in progress",
                "priority": "medium"
            },
            {
                "id": 2,
                "title": "Répondre aux e-mails",
                "due_date": "2024-05-12",
                "completed_date": "2024-05-11",
                "status": "completed",
                "priority": "high"
            },
            {
                "id": 3,
                "title": "Préparer le rapport de stage",
                "due_date": "2024-05-15",
                "completed_date": null,
                "status": "in progress",
                "priority": "high"
            }
        ]
        mockGetTodos.mockReturnValue(Todos);
        expect(getStatusTaskTotal("in progress", { getTodos: mockGetTodos })).toEqual(2);
        expect(mockGetTodos).toHaveBeenCalledTimes(1);
    });

    it("should return 0 when there are no tasks with the specified status", () => {
        const Todos = [
            {
                "id": 1,
                "title": "Faire les courses!",
                "due_date": "2024-05-10",
                "completed_date": null,
                "status": "in progress",
                "priority": "medium"
            },
            {
                "id": 2,
                "title": "Répondre aux e-mails",
                "due_date": "2024-05-12",
                "completed_date": "2024-05-11",
                "status": "completed",
                "priority": "high"
            },
            {
                "id": 3,
                "title": "Préparer le rapport de stage",
                "due_date": "2024-05-15",
                "completed_date": null,
                "status": "in progress",
                "priority": "high"
            }
        ]
        mockGetTodos.mockReturnValue(Todos);
        expect(getStatusTaskTotal("pending", { getTodos: mockGetTodos })).toEqual(0);
        expect(mockGetTodos).toHaveBeenCalledTimes(1);
    })
})