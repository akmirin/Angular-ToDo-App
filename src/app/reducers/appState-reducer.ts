import { Action } from '@ngrx/store';
import { makeClone } from '../utilities/helpers';
import {Actions} from './reducerActions/appState-action';

// ActionTypes
export const
    UPDATE_APP_STATE = 'UPDATE_APP_STATE',
    UPDATE_ACTIVE_SERVICE_GROUPS = 'UPDATE_ACTIVE_SERVICE_GROUPS',
    REMOVE_ACTIVE_SERVICE_GROUP = 'REMOVE_ACTIVE_SERVICE_GROUP',
    UPDATE_ACTIVE_PRODUCT_GROUPS = 'UPDATE_ACTIVE_PRODUCT_GROUPS',
    REMOVE_ACTIVE_PRODUCT_GROUP = 'REMOVE_ACTIVE_PRODUCT_GROUP'

// declare all valid properties in initial state, as we validate when updating
const initialAppState = {

    /* user */
    'user.userRole': "",
    'user.isUserLoggedIn': false,
    'user.': true,

    /*loaders*/
    'loader.newPidResultsLoading': false,
    'loader.newSidResultsLoading': false,
    'loader.newQuoteResultsLoading': false,
    'loader.newCPPResultsLoading': false,
    'loader.newSalespersonResultsLoading': false,
    'loader.contactSearchResultsLoading': false,
    'loader.addressSearchResultsLoading': false,
    'loader.opportunitySearchResultsLoading': false,
    'loader.newCustomerSearchResultsLoading': false,
    'loader.newAllCustomerSearchResultsLoading': false,
    'loader.updateOrderReportPreferences': false,
    'loader.endCustomerSearchResultsLoading': false,
    /*General Modals*/
    'modal.excelUploadMessageModal':false,
    /* Main Menu */
    'menu.mainMenuCollapsed': true,
    'menu.chatMenuCollapsed': true,
    'menu.showCreateQuoteModal': false,
    'menu.productMenuCollapsed': true,
    'menu.attachMenuCollapsed':true,
    'menu.quoteHeaderMenuCollapsed': true,
    'menu.serviceMenuCollapsed': true,
    'menu.freightMenuCollapsed': true,
    'menu.optionsMenuCollapsed': true,
    'menu.serviceOptionsMenuCollapsed': true,
    'menu.showDeleteQuoteModal': false,
    'menu.showAdvancedPidSearch' : false,
    'menu.showAdvancedCPPSearch' : false,
    'menu.loginSwitched':false,
    'menu.loginSwitched.newQLid':null,
    'api.bypassApiStop':false,
    'menu.mainMenu.logout':false,
    'menu.mainMenu.logout.qlid':null, 
    'menu.mainMenu.closeQuote':false,
    /* QuoteContent */
    'quote.activeQuoteSection': Constants.QUOTE_SECTIONS.QUOTE_SUMMARY,
    'quote.paramsId': null,
    'quote.openQuoteLoginNeeded': false,
    'quote.showPricingWorksheet': false,
	'quote.showPrintableQuote': false,
    // 'quote.alertsBadgeCount': 2, //WALDO - should dynamically populate based on unread notifications to this user
    'quote.freightPanelVisible': true,
    'quote.showModalDialogForAutoSaveChanges':false,
    'quote.showAssociateTradeModal': false,
    'quote.showTradeModalAfterAdvanceSearch': false,
    'quote.tradePanelVisible': false,
    'quote.isProductPanelCollapsed': true,
    'quote.isServicesPanelCollapsed': true,
    'quote.isFavorite': false,
    'quote.isInvoicingPreferencesShown': true,
    'quote.searchAllCustomersVisible': false,
    'quote.searchCustomersOnly': false,
    'quote.productsNeedUpdate' : false,
    'quote.servicesNeedUpdate' : false,
    'quote.freightsNeedUpdate' : false,
    'quote.hsrSoftwareOptiosnNeedUpdate' : false,
    'quote.softwareOptionsNeedUpdate' : false,
    'quote.deliveryInfo.addressesForProductsNeedUpdate': false,
    'quote.deliveryInfo.products.shipAddressForFUA': false,
    'quote.deliveryInfo.products.shipAddressForBill': false,
    'quote.deliveryInfo.products.shipAddressForReseller': false,
    'quote.deliveryInfo.products.shipAddressForInterim':false,
    'quote.deliveryInfo.specialInstructionsNeedUpdate': false,
    'quote.deliveryInfo.orderNotesNeedUpdate' : false,
    'quote.contact.implementationCordinatorNeedUpdate' : false,
    'quote.quoteContent.syncOrderSummary' : false,
    'quote.quoteContent.syncOrderNotBookedInfo' : false,
    'quote.quoteContent.syncServiceAgreement' : false,
    'quote.quoteContent.syncInvoiceProduct' : false,
    'quote.quoteContent.syncInvoiceService' : false,
    'panel.productsPanelCollapsed': true,
    'panel.cppPanelCollapsed': true,
    'panel.servicesPanelCollapsed': true,
    'panel.templatesPanelCollapsed': true,
    'panel.attachmentsPanelCollapsed': true,
    'panel.linksPanelCollapsed': true,
    'panel.freightPanelCollapsed': true,
    'panel.tradePanelCollapsed': true,
    'panel.addressesForProductsPanelCollapsed': true,
    'panel.specialInstructionsPanelCollapsed': true,
    'panel.deliveryInformationPanelCollapsed': true,
    'panel.addressesForServicesPanelCollapsed': true,
    'panel.orderNotesPanelCollapsed': true,
    'panel.approvalsPricingPanelCollapsed': true,
    'panel.approvalsAlternateStartDateCollapsed': true,
    'panel.approvalsServicePanelCollapsed': true,
    'panel.approvalsFreightPanelCollapsed': true,
    'panel.approvalsSoftwareConditionalOrderabilityPanelCollapsed': true,
    'panel.approvalsSoftwareMaintenanceRemovalPanelCollapsed': true,
    'panel.approvalsHardwareConditionalOrderabilityPanelCollapsed': true,
    'panel.orderSummaryPanelCollapsed': true,
    'panel.serviceAgreementSectionCollapsed': true,
    'panel.orderNotBookedInfoPanelCollapsed': true,
    'panel.isAgreementPanelShown': false,
    'panel.volumePurchaseAgreementPanelCollapsed': true,
    'panel.invoicingProductsPanelCollapsed': true,
    'panel.invoicingServicesPanelCollapsed': true,
    'panel.implementationCoordinatorPanelCollapsed': false,
    'panel.salesSupportPanelCollapsed': false,
    'panel.softwareOptionsPanelCollapsed': true,
    'panel.maintenanceOptionsPanelCollapsed': true,
    'panel.financialTermsPanelCollapsed': true,
    'panel.legalTermsPanelCollapsed': true,
    'panel.servicesTermsPanelCollapsed': true,
    'panel.commercialTermsPanelCollapsed': true,
    'panel.customerLinkagePanelCollapsed': false,
    'panel.customizePanelCollapsed': false,
    'panel.delegatePanelOpen': false,
    'panel.integratedSolutionPanelCollapsed': false,
    'panel.integratedSolutionRevenuePanelCollapsed': false,
    'panel.integratedSolutionGrossMarginPanelCollapsed': false,
    'panel.integratedSolutionCostPanelCollapsed': false,
    'panel.integratedSolutionControllableGrossPanelCollapsed': false,
    'panel.integratedAnnuityPanelCollapsed': false,
    'panel.integratedAnnuityRevenuePanelCollapsed': false,
    'panel.integratedAnnuityGrossMarginPanelCollapsed': false,
    'panel.integratedAnnuityCostPanelCollapsed': false,
    'panel.integratedAnnuityControllableGrossPanelCollapsed': false,
    'panel.solutionsTotalHardwarePanelCollapsed': false,
    'panel.solutionsTotalSoftwarePanelCollapsed': false,
    'panel.solutionsTotalOtherSolutionPanelCollapsed': false,
    'panel.servicesRevenuePanelCollapsed': false,
    'panel.servicesDirectCostsPanelCollapsed': false,
    'panel.servicesIndirectCostsPanelCollapsed': false,
    'panel.servicesPLAssumptionsPanelCollapsed': false,
    'panel.assumptionsExProductsPanelCollapsed': false,
    'panel.assumptionsCostFactorsPanelCollapsed': false,
    'panel.assumptionsHwAnnuityAssumptionsPanelCollapsed': false,
    'panel.inputsSolutionManualPanelCollapsed':false,
    'panel.inputsSolutionPanelCollapsed': false,
    'panel.inputsSolutionRollOutPanelCollapsed':false,
    'panel.inputsSolutionMCCAdjPanelCollapsed':false,
    'panel.inputsSolutionMCCUnitPanelCollapsed':false,
    'panel.inputsAnnuityPanelCollapsed': false,
    'panel.inputsSolutionCostPanelCollapsed': false,
    'panel.inputsAnnuityCostFactorsPanelCollapsed': false,
    'panel.inputsAnnuityManualPanelCollapsed': false,
    'panel.inputsAnnuityRevenuePanelCollapsed': false,
    'panel.inputsAnnuityCostPanelCollapsed': false,
    'panel.inputsAnnuityRollOutQuantityPanelCollapsed':false,
    'panel.inputsAnnuityRollOutReadOnlyPanelCollapsed':false,
    'panel.reapprovalSummarySolutionPanelCollapsed': false,
    'panel.reapprovalSummaryAnnuityPanelCollapsed': false,
    'panel.reapprovalSummarySolutionCurrentCollapsed': false,
    'panel.reapprovalSummarySolutionReferenceCollapsed': false,
    'panel.reapprovalSummaryAnnuityCurrentCollapsed': false,
    'panel.reapprovalSummaryAnnuityReferenceCollapsed': false,

    /* Quote Modals */
    'quote.isNonERPCountryModalShown': false,
    'quote.isOrderTypeModalShown': false,
    'quote.isConfigurationSuggestionsModalShown': false,
    'quote.isAcceptQuoteErrorMessageModalShown': false,
    'quote.isSubmitToOMQuoteErrorMessageModalShown': false,
    'quote.errorModalInformation': { display: false, message: null },
    'quote.isRecentNotificationsModalShown': false,
	'quote.showPrintableOrder': false,
    'quote.okCancelModalMessage': "",
    'quote.isTooltipModalShown': false,
    'quote.isWebOrderingAgreementModalShown': false,

    // 'quote.isQuoteErrorMessageModalShown': false, // used accept quote, and submit to OM quotes
    'quote.isReturnAnnuityQuoteReasonsModalShown': false, // used for return annuity quote
    'quote.isReturnSolutionQuoteReasonsModalShown': false, // used for return solution quote
    'quote.isResubmitQuoteChangesTrackerModalShown': false, // used for resubmit changes tracker modal
    // 'quote.isResubmitQuoteErrorMessageModalShown': false , // used for resubmit quote
    'quote.isSubmitQuoteErrorMessageModalShown': false, // used for submit quote
    'quote.isSubmitToOMAgainModalShown': false,
    'quote.isOrderErrorsModalShown': false,
    'quote.isWarningMessageModalShown': true,
    'quote.isAdditionalOrderNumberModalShown': false,
    'quote.isFinancialOrderNumberModalShown': false,
    'quote.isSelectSalesOrgModalShown': false,
    'quote.isSelectSalesOrgPanelShown': false,

    /* logging service */
    'logging.sendToConsole': true,
    'logging.sendToApi': false,
    'logging.logLevel': LogLevels.ERROR,

    /* floaters */
    'floater.quoteContentCollapsed': true,
    'floater.chatHelpCollapsed': true,

    /* productCatalog */
    'catalog.isSearchHeaderVisible': true,
    'catalog.dashboard': true,
    'catalog.subCategories': false,
    'catalog.productsGridVisible': true,
    'catalog.productsListVisible': false,
    'catalog.searchProductsGridVisible': true,
    'catalog.searchProductsListVisible': false,
    'catalog.product': false,

    /* expanded service line items/groups view */
    'services.expandedViewVisible': false,
    'products.expandedViewVisible': false,
    'services.depotSelectionVisible': '',
    'freight.expandedViewVisible':false,
    /* product and service groups */
    'activeServiceGroups': [],
    'activeProductGroups': [],
    'activeFreightGroup': null,
    'pns_currentFocusElement' : null,
    /* profit and loss */
    'quote.profitAndLossInputsUpdated': false,

    /* favorites */
    'quote.search.favorite': false,
    'product.search.favorite': false,
    'service.search.favorite': false,

    /* customer */
    'customer.address.results': [],

    /* quote version info */
    'quote.latestQuoteVersion': null,
    'quote.oldVersionOpen': false,

    /* submitted */
    'submit.freightApprovalSubmitted': false,
    'submit.pricingApprovalSubmitted': false,
    'submit.japanPricingApprovalSubmitted': false,
    'submit.japanServiceApprovalSubmitted': false,
    'submit.hcoApprovalSubmitted': false,
    'submit.scoApprovalSubmitted': false,
    'submit.smrApprovalSubmitted': false,

    /* quote search object */
    'search.quoteSearchObject': null,
    'search.returnToQuoteSearchResults': false,
    'search.backToSearchResultsNeeded': false,
    /*CPP Panel Item */
    'cpppanel.item.updateQuantity':false,
    'product.isModalOpen':{GUID:'',value:false},

    /*Dashboard Panels*/
    'favorite.bundles.noResults': false
};
export function appState(state: any = initialAppState, action: Actions){
    switch (action.type) {
        case UPDATE_APP_STATE:
            var newState = makeClone(state);
            Object.keys(action.payload).map((prop) => {
                // only update known properties, to catch errors
                if (prop in state) {
                    let newValue = action.payload[prop];
                    newState[prop] = newValue;
                } else {
                    // console.log(`invalid property [${prop}] passed into UiState-reducer`);
                }
            });
            return newState;

        case UPDATE_ACTIVE_SERVICE_GROUPS:
            var newState = makeClone(state);
            if (newState.activeServiceGroups.indexOf(action.payload) === -1) {
                newState.activeServiceGroups.push(action.payload);
            }
            return newState;

        case REMOVE_ACTIVE_SERVICE_GROUP:
            var newState = makeClone(state);
            newState.activeServiceGroups.forEach((group, index) => {
                if (newState.activeServiceGroups[index] === action.payload) {
                    newState.activeServiceGroups.splice(index, 1);
                }
            });
            return newState;

        case UPDATE_ACTIVE_PRODUCT_GROUPS:
            var newState = makeClone(state);
            if (newState.activeProductGroups.indexOf(action.payload) === -1) {
                newState.activeProductGroups.push(action.payload);
            }
            return newState;

        case REMOVE_ACTIVE_PRODUCT_GROUP:
            var newState = makeClone(state);
            newState.activeProductGroups.forEach((group, index) => {
                if (newState.activeProductGroups[index] === action.payload) {
                    newState.activeProductGroups.splice(index, 1);
                }
            });
            return newState;

        default:
            return state;

    }
};

// ******************************************************************************************************** //
// support for LoaderGraphic state mgmt
// keep separate from other appState to minimize cascading/frequent updates

// ActionTypes
export const
    START_LOADER = 'START_LOADER',
    STOP_LOADER = 'STOP_LOADER',
    SHOW_BLOCKER = 'SHOW_BLOCKER';  

// declare all valid properties in initial state, as we validate when updating
const loaderInitialState = {
    isLoaderVisible: false,
    isBlockerVisible: false,
    refCount: 0,
}

export function loaderState(state: any = loaderInitialState, action: Actions){
    switch (action.type) {
        case SHOW_BLOCKER:
            var newState = makeClone(state);
            newState.isBlockerVisible = true;
            return newState;

        case START_LOADER:
            var newState = makeClone(state);
            newState.isLoaderVisible = true;
            ++newState.refCount;
            if (action.payload.shouldBlock) {
                newState.isBlockerVisible = true;
            }
            // console.log(`START_LOADER => ${JSON.stringify(newState)}`);
            return newState;

        case STOP_LOADER:
            var newState = makeClone(state);
            --newState.refCount;
            if(newState.refCount < 0){
                console.log(`STOP_LOADER refCount is: ${newState.refCount}, Request object is:`,action.payload.reqObj);
                newState.refCount = 0;
            }
            newState.isLoaderVisible = (newState.refCount > 0);
            if (newState.isBlockerVisible && newState.refCount === 0) {
                newState.isBlockerVisible = false; // Blocker was on but is no longer needed
            }
            // console.log(`STOP_LOADER => ${JSON.stringify(newState)}`);
            return newState;

        default:
            return state;
    }
};

// ******************************************************************************************************** //
// keep track of previous navigation
export const
    UPDATE_ROUTES = 'UPDATE_ROUTES',
    CLEAR_ROUTES = 'CLEAR_ROUTES';

export function lastNavigation(state: Array<any> = [], action: Actions) {
    switch (action.type) {
        case UPDATE_ROUTES:
            var newState = makeClone(state);
            newState = action.payload;
            return newState;

        case CLEAR_ROUTES:
            return [];
    }
};


// ******************************************************************************************************** //
// keep track of details needed for auto-save feature
export const
    QUOTE_AUTOSAVE_ACTIVATE = 'QUOTE_AUTOSAVE_ACTIVATE',
    QUOTE_AUTOSAVE_DEACTIVATE = 'QUOTE_AUTOSAVE_DEACTIVATE',
    QUOTE_AUTOSAVE_NEEDED = 'QUOTE_AUTOSAVE_NEEDED',
    QUOTE_AUTOSAVE_INPROGRESS = 'QUOTE_AUTOSAVE_INPROGRESS',
    QUOTE_AUTOSAVE_COMPLETE = 'QUOTE_AUTOSAVE_COMPLETE',
    // RESET_QUOTE_AUTOSAVE = 'RESET_QUOTE_AUTOSAVE',
    CLEAR_QUOTE_AUTOSAVE = 'CLEAR_QUOTE_AUTOSAVE',
    TOGGLE_QUOTE_AUTOSAVE_BY_USER_PREF = 'TOGGLE_QUOTE_AUTOSAVE_BY_USER_PREF',
    ACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF = 'ACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF',
    DEACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF = 'DEACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF';

const quoteAutoSaveStatusInitialState: QuoteAutoSaveStatus = {
    isAutoSaveActiveApiConstant: false,
    isAutoSaveActivePerUserPreference: true,
    isAutoSaveActive: false,   //can turn on/off auto-save feature globally (perhaps should live in "appState-reducer" ?)
    isDirty: false,         //identifies whether quote has changes that need to be saved
    saveInProgress: false,  //identifies whether quote save is in progress (isDirty flag can be ambiguous at this point)
};

export function quoteAutoSaveStatus(state: QuoteAutoSaveStatus = quoteAutoSaveStatusInitialState, action: Actions) {
    switch (action.type) {

        case QUOTE_AUTOSAVE_ACTIVATE:
            var newState = makeClone(state);
            newState.isAutoSaveActive = true;
            return newState;

        case QUOTE_AUTOSAVE_DEACTIVATE:
            var newState = makeClone(state);
            newState.isAutoSaveActive = false;
            return newState;

        case QUOTE_AUTOSAVE_NEEDED:
            var newState = makeClone(state);
            newState.isDirty = true;
            return newState;

        case QUOTE_AUTOSAVE_INPROGRESS:
            var newState = makeClone(state);
            newState.saveInProgress = true;
            return newState;

        case QUOTE_AUTOSAVE_COMPLETE:
            var newState = makeClone(state);
            newState.isDirty = false;
            newState.saveInProgress = false;
            return newState;

        // case RESET_QUOTE_AUTOSAVE:
        //     var newState = makeClone(quoteAutoSaveStatusInitialState); //WALDO - maybe i'm being paranoid ... do we really need to clone?
        //     return newState;

        case CLEAR_QUOTE_AUTOSAVE:
            var newState = makeClone(state);
            newState.isDirty = false;
            newState.saveInProgress = false;
            return newState;

        case TOGGLE_QUOTE_AUTOSAVE_BY_USER_PREF:
            var newState = makeClone(state);
            newState.isAutoSaveActivePerUserPreference = !state.isAutoSaveActivePerUserPreference;
            // make sure auto-save is turned off if user preference is off (note - converse may not be true)
            if (!newState.isAutoSaveActivePerUserPreference) {
                newState.isAutoSaveActive = false;
            }
            return newState;

        case ACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF:
           var newState = makeClone(state);
           newState.isAutoSaveActivePerUserPreference = true;
           newState.isAutoSaveActive = true;
           return newState;

        case DEACTIVATE_QUOTE_AUTOSAVE_BY_USER_PREF:
           var newState = makeClone(state);
           newState.isAutoSaveActivePerUserPreference = false;
           newState.isAutoSaveActive = false;
           return newState;

        default:
            return state;
    }
};
