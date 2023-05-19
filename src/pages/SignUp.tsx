import { ChangeEvent, FormEvent, useReducer } from "react";

enum ActionEnum {
    MODIFY_EMAIL = "MODIFY_EMAIL",
    MODIFY_PASSWORD = "MODIFY_PASSWORD",
    MODIFY_CPASSWORD = "MODIFY_CPASSWORD",
}

interface StateInterface {
    email: string;
    password: string;
    cpassword: string;
}

interface ActionInterface {
    type: ActionEnum;
    payload: {
        email?: string;
        password?: string;
        cpassword?: string;
    };
}

function reducer(state: StateInterface, action: ActionInterface) {
    switch (action.type) {
        default:
            return state;
    }
}

export const SignUp = () => {
    const [state, dispatch] = useReducer(reducer, {
        email: "",
        password: "",
        cpassword: "",
    });

    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.cpassword !== state.password) {
            alert("Passwords do not match!");
            return;
        }
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    value={state.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        dispatch({
                            type: ActionEnum.MODIFY_EMAIL,
                            payload: { email: e.target.value },
                        });
                    }}
                    type="email"
                />

                <input
                    value={state.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        dispatch({
                            type: ActionEnum.MODIFY_PASSWORD,
                            payload: { password: e.target.value },
                        });
                    }}
                    type="password"
                />

                <input
                    value={state.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        dispatch({
                            type: ActionEnum.MODIFY_CPASSWORD,
                            payload: { cpassword: e.target.value },
                        });
                    }}
                    type="cpassword"
                />
            </form>
        </div>
    );
};
