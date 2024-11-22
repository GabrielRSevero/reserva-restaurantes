<?php

namespace App\Services;

use Twilio\Rest\Client;

class TwilioService {

  private $client;
  private $verifyServiceSid;

  public function __construct() 
  {
    $accountSid = env("TWILIO_ACCOUNT_SID");
    $authToken = env("TWILIO_AUTH_TOKEN");
    $this->verifyServiceSid = env("TWILIO_VERIFY_SERVICE_SID");

    if (!$accountSid || !$authToken || !$this->verifyServiceSid) {
        throw new \Exception("Configurações do Twilio não estão definidas corretamente.");
    }

    $this->client = new Client($accountSid, $authToken);
  }

  public function sendVerificationCode($phoneNumber)
  {
    $verification = $this->client->verify->v2->services($this->verifyServiceSid)->verifications->create("+55$phoneNumber", "sms");

    return $verification;
  }

  public function checkVerificationCode($phoneNumber, $verificationCode)
  {
    $verificationCheck = $this->client->verify->v2->services($this->verifyServiceSid)->verificationChecks->create(["to" => "+55$phoneNumber", "code" => $verificationCode]);

    return $verificationCheck;
  }
}