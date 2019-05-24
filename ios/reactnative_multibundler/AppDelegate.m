/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RCTBridge.h"
#import <React/RCTBridge+Private.h>

@interface AppDelegate ()
{
  RCTBridge *bridge;
  UINavigationController *rootViewController;
  UIViewController *mainViewController;
  BOOL isBuzLoaded;
  BOOL isBuz1Loaded;
  BOOL isBuz2Loaded;
  BOOL isBuz3Loaded;
}
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"platform.ios" withExtension:@"bundle"];
  bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                                 moduleProvider:nil
                                  launchOptions:launchOptions];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  mainViewController = [UIViewController new];
  mainViewController.view = [[NSBundle mainBundle] loadNibNamed:@"MainScreen" owner:self options:nil].lastObject;
  rootViewController = [[UINavigationController alloc] initWithRootViewController:mainViewController];
  mainViewController.edgesForExtendedLayout = UIRectEdgeNone;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  UIButton* buz1 = [mainViewController.view viewWithTag:101];
  UIButton* buz2 = [mainViewController.view viewWithTag:91];
  UIButton* buz3 = [mainViewController.view viewWithTag:123];
  [buz1 addTarget:self action:@selector(goBuz1:) forControlEvents:UIControlEventTouchUpInside];
  [buz2 addTarget:self action:@selector(goBuz2:) forControlEvents:UIControlEventTouchUpInside];
  [buz3 addTarget:self action:@selector(goBuz3:) forControlEvents:UIControlEventTouchUpInside];
  //[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(loadBuzBundle) name:@"RCTJavaScriptDidLoadNotification" object:nil];//如果只是要进入app立马加载rn可以用该方法
  return YES;
}

-(void)goBuz1:(UIButton *)button{
  [self gotoBuzWithModuleName:@"reactnative_multibundler" bundleName:@"index.ios"];
  isBuz1Loaded = YES;
}

-(void)goBuz2:(UIButton *)button{
  [self gotoBuzWithModuleName:@"reactnative_multibundler2" bundleName:@"index2.ios"];
  isBuz2Loaded = YES;
}

-(void)goBuz3:(UIButton *)button{
  [self gotoBuzWithModuleName:@"reactnative_multibundler3" bundleName:@"index3.ios"];
  isBuz3Loaded = YES;
}

-(void) gotoBuzWithModuleName:(NSString*)moduleName bundleName:(NSString*)bundleName{
  BOOL isBundleLoaded = NO;
  if((isBuz1Loaded&&[bundleName isEqualToString:@"index.ios"])
     ||(isBuz2Loaded&&[bundleName isEqualToString:@"index2.ios"])
     ||(isBuz3Loaded&&[bundleName isEqualToString:@"index3.ios"])){
    isBundleLoaded = YES;
  }
  if(isBundleLoaded==NO){
      NSURL *jsCodeLocationBuz = [[NSBundle mainBundle] URLForResource:bundleName withExtension:@"bundle"];
      NSError *error = nil;
      NSData *sourceBuz = [NSData dataWithContentsOfFile:jsCodeLocationBuz.path
                                             options:NSDataReadingMappedIfSafe
                                               error:&error];
      [bridge.batchedBridge executeSourceCode:sourceBuz sync:NO];
  }
  RCTRootView* view = [[RCTRootView alloc] initWithBridge:bridge moduleName:moduleName initialProperties:nil];
  UIViewController* controller = [UIViewController new];
  [controller setView:view];
  [mainViewController.navigationController pushViewController:controller animated:YES];
}
/*
-(void)loadBuzBundle{//如果只是要进入app立马加载rn可以用该方法
  NSLog(@"RCTCXXBridge loadBuzBundle");
  if(isBuzLoaded){
    return;
  }
  NSURL *jsCodeLocationBuz = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"bundle"];
  NSError *error = nil;
  NSData *sourceBuz = [NSData dataWithContentsOfFile:jsCodeLocationBuz.path
                                             options:NSDataReadingMappedIfSafe
                                               error:&error];
  [bridge.batchedBridge executeSourceCode:sourceBuz sync:NO];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"reactnative_multibundler" initialProperties:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  isBuzLoaded = YES;
}*/

@end

