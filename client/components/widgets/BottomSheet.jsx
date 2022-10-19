import BottomPanel from '@gorhom/bottom-sheet';
import { BottomSheetView } from '@gorhom/bottom-sheet';

const BottomSheet = (props) => {
    const { bottomSheetRef, setIsOpen, snapPoint } = props;
    // It should be the % of Height for this SnapPoint..
    const snapPoints = [snapPoint];

    return (
        <BottomPanel
            ref={bottomSheetRef}
            index={-1} //  -1 is By Default Closed.. // 0 is by Defalt Opened..
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            backgroundStyle={{borderRadius: 30, borderWidth: 1, borderColor: 'lightgray'}}
        >
            <BottomSheetView>
               {props.children}
            </BottomSheetView>
        </BottomPanel>
    );
};

export default BottomSheet;