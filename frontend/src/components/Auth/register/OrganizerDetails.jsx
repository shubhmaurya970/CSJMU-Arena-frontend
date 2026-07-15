
import TextField from "../../common/TextField";

function OrganizerDetails() {

    return (

        <div>

            <div className="mb-8">

                <h2
                    className="
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Organization Information
                </h2>

                <p
                    className="
                        mt-2
                        text-white/45
                    "
                >
                    Tell us about your organization.
                </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

                <TextField
                    label="Organization Name"
                    placeholder="Google Developer Group"
                />

                <TextField
                    label="Designation"
                    placeholder="President"
                />

                <TextField
                    label="Official Contact"
                    placeholder="+91 XXXXX XXXXX"
                />

                <TextField
                    label="Faculty Advisor"
                    placeholder="Optional"
                />

            </div>

        </div>

    );

}

export default OrganizerDetails;