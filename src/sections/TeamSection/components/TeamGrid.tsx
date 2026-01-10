import { TeamMember } from "@/sections/TeamSection/components/TeamMember";

export const TeamGrid = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <TeamMember
                    imageUrl="https://leza-react.envytheme.com/images/team/team1.jpg"
                    name="Jerome Le Luel"
                    position="Managing Director"
                />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <TeamMember
                    imageUrl="https://leza-react.envytheme.com/images/team/team2.jpg"
                    name="Andrew Learoyd"
                    position="Chief Executive Officer"
                />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <TeamMember
                    imageUrl="https://leza-react.envytheme.com/images/team/team3.jpg"
                    name="Harry Nelis"
                    position="Technology Officer"
                />
            </div>
            <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-3/12">
                <TeamMember
                    imageUrl="https://leza-react.envytheme.com/images/team/team4.jpg"
                    name="Lucy Vernall"
                    position="Chief Financial Officer"
                />
            </div>
        </div>
    );
};
