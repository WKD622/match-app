import {
    CommentsLoader,
    ContentLoader,
    ScoreLoader,
    WidgetHeaderLoader,
    WidgetLoaderBody
} from "components/molecules/MatchWidgetLoader/styles";
import {observer} from "mobx-react";

const MatchWidgetLoader = observer(() => (
    <WidgetLoaderBody>
        <WidgetHeaderLoader>
            <ContentLoader width={120} height={20}/>
            <ContentLoader width={120} height={20}/>
        </WidgetHeaderLoader>
        <ScoreLoader>
            <ContentLoader width={70} height={70}/>
            <ContentLoader width={20} height={20}/>
            <ContentLoader width={20} height={20}/>
            <ContentLoader width={70} height={70}/>
        </ScoreLoader>
        <CommentsLoader>
            <div>
                <ContentLoader width={90} height={15}/>
            </div>
            <div>
                <ContentLoader width={90} height={15}/>
            </div>
        </CommentsLoader>
    </WidgetLoaderBody>
))

export default MatchWidgetLoader
