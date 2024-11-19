<?php

namespace App\Console\Commands\Twilio;

use Illuminate\Console\Command;
use Twilio\Rest\Client;
use App\Services\TwilioService;

class SendVerifyCode extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'twilio:send-verify-code';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends SMS verification code';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $twilio = new TwilioService();

        return $twilio->checkVerificationCode("+5566996709422", 317496);
    }
}
